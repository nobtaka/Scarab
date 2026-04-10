//
//  ScarabApp.swift
//  Scarab
//
//  Created by Nob Nukui on 2026/03/10.
//

import SwiftUI

@main
struct ScarabApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
            #if os(macOS)
                .frame(
                    minWidth: 250, maxWidth: 500,
                    minHeight: 400, maxHeight: .infinity
                )
            #endif
        }
        #if os(macOS)
        .windowResizability(.contentSize)
        #endif
    }
}
