//
//  ContentView.swift
//  CoinzPricezWatchApp Watch App
//
//  Created by Emir Arı on 1.05.2024.
//

import SwiftUI

struct ContentView: View {
  @ObservedObject var phoneConnector = PhoneConnector()
  
  private func sendHearts() {
    let randomHeartNumber = String(Int.random(in: 0..<100))
    let message: [String: Any] = ["watchMessage": randomHeartNumber]
    self.phoneConnector.session.sendMessage(message, replyHandler: nil) { (error) in
      print(error.localizedDescription)
    }
  }
  
    var body: some View {
      VStack (spacing: 25) {
          Image("Logo")
                .resizable()
                .scaledToFit()
                .frame(width: 100)
        Text(self.phoneConnector.receivedMessage)
          .font(.system(size: 12))
          Button {
            sendHearts()
          } label: {
            Text("Request Refresh")
              .font(.system(size: 16))
          }
        }
        .padding()
    }
}

#Preview {
    ContentView()
}
