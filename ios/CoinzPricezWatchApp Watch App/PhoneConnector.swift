//
//  PhoneConnector.swift
//  CoinzPricezWatchApp Watch App
//
//  Created by Emir Arı on 1.05.2024.
//

import WatchKit
import WatchConnectivity

final class PhoneConnector: NSObject, WCSessionDelegate, ObservableObject {
  
  @Published var receivedMessage = "Waiting..."
  
  func session(_ session: WCSession, activationDidCompleteWith activationState: WCSessionActivationState, error: Error?) {
    // Something here, lmao
  }
  
  func session(_ session: WCSession, didReceiveMessage message: [String : Any], replyHandler: @escaping ([String : Any]) -> Void) {
    guard let messageFromApp = message["messageFromApp"] as? String else { return }
    DispatchQueue.main.async {
      self.receivedMessage = messageFromApp
    }
  }
  
  var session: WCSession
  
  init(session: WCSession = .default) {
    self.session = session
    super.init()
    if WCSession.isSupported() {
      session.delegate = self
      session.activate()
    }
  }
  
}
