import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb } from "lucide-react"

interface CulturalTipProps {
  tip: string
}

export function CulturalTip({ tip }: CulturalTipProps) {
  return (
    <Card className="bg-amber-50 border-amber-200">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <Lightbulb className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
          <div>
            <div className="font-semibold text-amber-800 mb-1">Cultural Tip</div>
            <p className="text-amber-700 text-sm">{tip}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
