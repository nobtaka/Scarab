//
//  ContentView.swift
//  Scarab
//
//  Created by Nob Nukui on 2026/03/10.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(spacing: 20) {
            if let url = Bundle.main.url(forResource: "Icon", withExtension: "png"),
               let data = try? Data(contentsOf: url),
               let nsImage = platformImage(from: data) {
                Image(decorative: nsImage, scale: 1.0)
                    .resizable()
                    .frame(width: 128, height: 128)
            }

            #if os(iOS)
            Text("You can turn on Scarab's Safari extension in Settings.")
            #else
            Text("You can turn on Scarab's Safari extension in Safari Settings.")
            #endif
        }
        .padding(40)
    }

    private func platformImage(from data: Data) -> CGImage? {
        #if os(iOS)
        return UIImage(data: data)?.cgImage
        #else
        return NSImage(data: data)?.cgImage(forProposedRect: nil, context: nil, hints: nil)
        #endif
    }
}
