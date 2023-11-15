import { io } from "socket.io-client";

const url = "http://localhost:npm ";

export const socket = io(url);
