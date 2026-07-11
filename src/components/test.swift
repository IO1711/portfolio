//
//  SwiftUIView.swift
//  PlaygroundApp
//
//  Created by Bilolbek Rayimov on 22/12/25.
//

import SwiftUI

class ListNode: Identifiable {
    let id = UUID()
    var title: String
    var position: CGPoint
    var next: ListNode?
    
    init(title: String, position: CGPoint) {
        self.title = title
        self.position = position
        self.next = nil
    }
}

struct TestAnimationView: View {
    let snapDistance: CGFloat = 20
    
    /*@State private var nodes: [ListNode] = [
        ListNode(title: "A", position: CGPoint(x: 120, y: 160)),
        ListNode(title: "B", position: CGPoint(x: 280, y: 300)),
        ListNode(title: "C", position: CGPoint(x: 160, y: 460)),
    ]*/
    
    @State private var head: ListNode?
    
    @State private var activeNodeID: UUID? = nil
    @State private var dragOffset: CGSize = .zero
    
    @State private var isDraggingWire: Bool = false
    @State private var wireStart: CGPoint = .zero
    @State private var wireEnd: CGPoint = .zero

    
    var body: some View {
        ZStack {
            //Color.black.opacity(0.9).ignoresSafeArea()
            HPUColors.bg.ignoresSafeArea()
            
            if isDraggingWire {
                Path { path in
                    path.move(to: wireStart)
                    path.addCurve(
                        to: wireEnd,
                        control1: CGPoint(x: wireStart.x, y: wireStart.y-80),
                        control2: CGPoint(x: wireEnd.x, y: wireEnd.y+80)
                    )
                }
                .stroke(HPUColors.accent, lineWidth: 3)
            }

            
            ForEach($nodes) { $node in
                NodeView(title: node.title)
                    .position(node.position)
                    /*.gesture(
                        DragGesture()
                            .onChanged { value in
                                
                                if activeNodeID != node.id {
                                    activeNodeID = node.id
                                    dragOffset = CGSize(
                                        width: value.location.x - node.position.x,
                                        height: value.location.y - node.position.y
                                    )
                                }

                                node.position = CGPoint(
                                    x: value.location.x - dragOffset.width,
                                    y: value.location.y - dragOffset.height
                                )
                            }
                            .onEnded { _ in
                                activeNodeID = nil
                                dragOffset = .zero
                            }
                    )*/
                Circle()
                    .fill(HPUColors.accent)
                    .frame(width: 20, height: 20)
                    .position(x: node.position.x, y: node.position.y - 45)
                    .gesture(
                        DragGesture()
                            .onChanged { value in
                                if !isDraggingWire {
                                    isDraggingWire = true
                                    wireStart = CGPoint(
                                        x: node.position.x,
                                        y: node.position.y - 45
                                    )
                                }
                                wireEnd = value.location
                                
                                for node in nodes {
                                    let inputPoint = CGPoint(
                                        x: node.position.x,
                                        y: node.position.y + 45
                                    )

                                    let dx = wireEnd.x - inputPoint.x
                                    let dy = wireEnd.y - inputPoint.y
                                    let distance = sqrt(dx * dx + dy * dy)

                                    if distance < snapDistance {
                                        wireEnd = inputPoint
                                        break
                                    }
                                }

                            }
                            .onEnded { _ in
                                isDraggingWire = false
                            }
                    )

                
                Circle()
                    .fill(HPUColors.success)
                    .frame(width: 10, height: 10)
                    .position(x: node.position.x, y: node.position.y + 45)
                    

            }
        }
    }
    
    func initList(){
        head = ListNode(title: "Head", position: CGPoint(x: 100, y: 100))
        
        head?.next = ListNode(title: "Node 2", position: CGPoint(x: 200, y: 200))
        
        head?.next?.next = ListNode(title: "Node 3", position: CGPoint(x: 300, y: 100))
        
        head?.next?.next?.next = ListNode(title: "Node 4", position: CGPoint(x: 400, y: 200))
        
        head?.next?.next?.next?.next = ListNode(title: "Node 5", position: CGPoint(x: 500, y: 100))
    }
}

struct NodeView: View {
    let title: String
    
    var body: some View {
        RoundedRectangle(cornerRadius: 16)
            .fill(HPUColors.primary.opacity(0.12))
            .overlay(
                RoundedRectangle(cornerRadius: 16)
                    .stroke(Color.white.opacity(0.25), lineWidth: 1)
            )
            .frame(width: 140, height: 90)
            .overlay(
                Text("Node \(title)")
                    .foregroundStyle(.white)
                    .font(.headline)
            )
    }
}

#Preview {
    TestAnimationView()
}
