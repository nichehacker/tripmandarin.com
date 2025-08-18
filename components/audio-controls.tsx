"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX, Settings } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"

interface AudioControlsProps {
  className?: string
}

export function AudioControls({ className }: AudioControlsProps) {
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState([0.8])
  const [rate, setRate] = useState([0.8])
  const [showSettings, setShowSettings] = useState(false)

  const toggleMute = () => {
    setIsMuted(!isMuted)
    // In a real app, this would control global audio settings
  }

  const handleVolumeChange = (newVolume: number[]) => {
    setVolume(newVolume)
    // Apply volume to speech synthesis
    if ("speechSynthesis" in window) {
      // Note: speechSynthesis doesn't have global volume control
      // This would be implemented with audio context in a real app
    }
  }

  const handleRateChange = (newRate: number[]) => {
    setRate(newRate)
    // This affects the speech rate for all pronunciations
  }

  return (
    <div className={className}>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" onClick={toggleMute} className="h-8 w-8 p-0">
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </Button>

        <Button variant="ghost" size="sm" onClick={() => setShowSettings(!showSettings)} className="h-8 w-8 p-0">
          <Settings className="h-4 w-4" />
        </Button>
      </div>

      {showSettings && (
        <Card className="absolute top-full right-0 mt-2 w-64 z-50">
          <CardContent className="p-4 space-y-4">
            <div>
              <label className="text-sm font-medium">Speech Rate</label>
              <Slider value={rate} onValueChange={handleRateChange} max={2} min={0.5} step={0.1} className="mt-2" />
              <div className="text-xs text-muted-foreground mt-1">{rate[0]}x speed</div>
            </div>

            <div>
              <label className="text-sm font-medium">Volume</label>
              <Slider
                value={volume}
                onValueChange={handleVolumeChange}
                max={1}
                min={0}
                step={0.1}
                className="mt-2"
                disabled={isMuted}
              />
              <div className="text-xs text-muted-foreground mt-1">{Math.round(volume[0] * 100)}%</div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
