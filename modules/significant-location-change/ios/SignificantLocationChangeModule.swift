import ExpoModulesCore
import CoreLocation

public class SignificantLocationChangeModule: Module {
    private var locationManager: LocationManager?
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  public func definition() -> ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('SignificantLocationChange')` in JavaScript.
    Name("SignificantLocationChange")

    // Sets constant properties on the module. Can take a dictionary or a closure that returns a dictionary.
    Constants([
      "PI": Double.pi
    ])

    Events("onLocationUpdate")

      Function("requestPermission"){
          print("request")
          locationManager?.requestPermission();
      }
      
      Function("startMonitoring"){
          print("start")
          locationManager?.startMonitoringSignificantLocationChanges(handler: locationUpdateListener)
      }
      
      Function("stopMonitoring"){
          print("stop")
          locationManager?.stopMonitoringSignificantLocationChanges()
      }
      
      OnCreate {
          locationManager = LocationManager()
      }

  }
    
    private func locationUpdateListener(_ location: CLLocation) {
        sendEvent("onLocationUpdate", [
            "longitude": location.coordinate.longitude,
            "latitude": location.coordinate.latitude
        ])
    }
    
}



class LocationManager:NSObject, CLLocationManagerDelegate {
    private let locationManager = CLLocationManager()
    public var sendEvent: ((CLLocation) -> Void)?
    
    public func startMonitoringSignificantLocationChanges(handler: @escaping (CLLocation) -> Void) {
        print("locationManager: start")
        if CLLocationManager.significantLocationChangeMonitoringAvailable() {
            print("locationManager: authorized")
            sendEvent = handler
          locationManager.startMonitoringSignificantLocationChanges()
        }
      }

      public func stopMonitoringSignificantLocationChanges() {
        locationManager.stopMonitoringSignificantLocationChanges()
      }
    
    public func requestPermission(){
        print("locationManager: request")
        locationManager.requestAlwaysAuthorization()
    }
    
    override init() {
        super.init()
        locationManager.delegate = self
        locationManager.requestWhenInUseAuthorization()
    }
    
    public func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        guard let location = locations.last else { return }
        sendEvent?(location)
    }

}
