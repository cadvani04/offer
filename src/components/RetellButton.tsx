"use client";

import { useState } from "react";
import { ArrowRight, Loader2, Phone, X } from "lucide-react";
import { RetellWebClient } from "retell-client-js-sdk";

interface RetellButtonProps {
  variant?: "primary" | "secondary";
  children?: React.ReactNode;
}

export default function RetellButton({ variant = "primary", children }: RetellButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isInCall, setIsInCall] = useState(false);
  const [webCall, setWebCall] = useState<RetellWebClient | null>(null);

  const startCall = async () => {
    setIsLoading(true);

    try {
      // Fetch access token from our API
      const response = await fetch("/api/start-call", {
        method: "POST",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to start call");
      }

      const data = await response.json();

      // Initialize Retell Web Client
      const retellWebClient = new RetellWebClient();

      retellWebClient.on("call_started", () => {
        console.log("Call started");
        setIsInCall(true);
        setIsLoading(false);
      });

      retellWebClient.on("call_ended", () => {
        console.log("Call ended");
        setIsInCall(false);
        setWebCall(null);
      });

      retellWebClient.on("error", (error) => {
        console.error("Retell error:", error);
        setIsLoading(false);
        setIsInCall(false);
        alert("Call error: " + (error.message || "Unknown error"));
      });

      // Start the call
      await retellWebClient.startCall({
        accessToken: data.access_token,
      });

      setWebCall(retellWebClient);
    } catch (error) {
      console.error("Error starting call:", error);
      setIsLoading(false);
      alert(error instanceof Error ? error.message : "Failed to start call. Please try again.");
    }
  };

  const endCall = () => {
    if (webCall) {
      webCall.stopCall();
      setIsInCall(false);
      setWebCall(null);
    }
  };

  if (isInCall) {
    return (
      <button
        onClick={endCall}
        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition-colors animate-pulse"
      >
        <X className="w-4 h-4" />
        End Call
      </button>
    );
  }

  const buttonClasses =
    variant === "primary"
      ? "flex items-center gap-2 px-6 py-3 rounded-lg bg-green-500 text-primary-foreground font-medium hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      : "flex items-center gap-2 px-6 py-3 rounded-lg bg-card border border-border hover:border-green-500/50 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <button onClick={startCall} disabled={isLoading} className={buttonClasses}>
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          Connecting...
        </>
      ) : (
        <>
          {children || (
            <>
              <Phone className="w-4 h-4" />
              Test Drive Our AI
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </>
      )}
    </button>
  );
}
