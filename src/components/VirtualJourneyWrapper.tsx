"use client";

import { useState } from "react";
import { VirtualJourneyTrigger } from "./VirtualJourneyTrigger";
import { VirtualJourney } from "./VirtualJourney";
import { AnimatePresence } from "framer-motion";

export function VirtualJourneyWrapper() {
  const [showJourney, setShowJourney] = useState(false);

  return (
    <>
      <VirtualJourneyTrigger onTrigger={() => setShowJourney(true)} />
      
      <AnimatePresence>
        {showJourney && <VirtualJourney onClose={() => setShowJourney(false)} />}
      </AnimatePresence>
    </>
  );
}
