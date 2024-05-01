//
//  PhoneConnector.swift
//  CoinzPricezWatchApp Watch App
//
//  Created by Emir Arı on 1.05.2024.
//

import WatchKit
import WatchConnectivity

final class PhoneConnector: NSObject, WCSessionDelegate {
  
  func session(_ session: WCSession, activationDidCompleteWith activationState: WCSessionActivationState, error: (any Error)?) {
    // Something here, lmao
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
