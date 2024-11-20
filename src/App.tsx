"use client";


import {
  ClientSideSuspense,
  LiveblocksProvider,
  RoomProvider,
} from "@liveblocks/react/suspense";
import Editor from "./Editor";

export default function App() {
  return (
    <LiveblocksProvider
      publicApiKey={
        "your_pk"
      }
    >
      <RoomProvider id="test_room" autoConnect>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          <Editor />
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}