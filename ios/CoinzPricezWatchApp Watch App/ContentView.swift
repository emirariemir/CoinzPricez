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
      VStack (spacing: 10) {
          Image(systemName: "heart.fill")
                .imageScale(.large)
                .foregroundStyle(.yellow)
        Text(self.phoneConnector.receivedMessage)
          Button {
            sendHearts()
          } label: {
            Text("Send to app!")
          }
        }
        .padding()
    }
}

#Preview {
    ContentView()
}
