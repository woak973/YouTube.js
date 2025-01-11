// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               v5.29.2
// source: youtube/api/pfiinnertube/reel_item_watch_request.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { InnerTubeContext } from "./innertube_context.js";
import { PlayerRequest } from "./player_request.js";

export const protobufPackage = "youtube.api.pfiinnertube";

export interface ReelItemWatchRequest {
  context?: InnerTubeContext | undefined;
  playerRequest?: PlayerRequest | undefined;
  params?: string | undefined;
  disablePlayerResponse?: boolean | undefined;
}

function createBaseReelItemWatchRequest(): ReelItemWatchRequest {
  return { context: undefined, playerRequest: undefined, params: undefined, disablePlayerResponse: undefined };
}

export const ReelItemWatchRequest: MessageFns<ReelItemWatchRequest> = {
  encode(message: ReelItemWatchRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.context !== undefined) {
      InnerTubeContext.encode(message.context, writer.uint32(10).fork()).join();
    }
    if (message.playerRequest !== undefined) {
      PlayerRequest.encode(message.playerRequest, writer.uint32(18).fork()).join();
    }
    if (message.params !== undefined) {
      writer.uint32(26).string(message.params);
    }
    if (message.disablePlayerResponse !== undefined) {
      writer.uint32(32).bool(message.disablePlayerResponse);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ReelItemWatchRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReelItemWatchRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.context = InnerTubeContext.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.playerRequest = PlayerRequest.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.params = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.disablePlayerResponse = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
