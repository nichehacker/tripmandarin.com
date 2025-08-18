"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, AlertTriangle, Download, Plus, X } from "lucide-react"
import Link from "next/link"

interface EmergencyInfo {
  name: string
  allergies: string[]
  medications: string[]
  conditions: string[]
  emergencyContact: string
  bloodType: string
}

const commonAllergies = [
  { english: "Peanuts", chinese: "花生" },
  { english: "Shellfish", chinese: "贝类" },
  { english: "Dairy", chinese: "乳制品" },
  { english: "Eggs", chinese: "鸡蛋" },
  { english: "Soy", chinese: "大豆" },
  { english: "Wheat", chinese: "小麦" },
]

export default function EmergencyCardPage() {
  const [info, setInfo] = useState<EmergencyInfo>({
    name: "",
    allergies: [],
    medications: [],
    conditions: [],
    emergencyContact: "",
    bloodType: "",
  })
  const [customAllergy, setCustomAllergy] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const addAllergy = (allergy: string) => {
    if (allergy && !info.allergies.includes(allergy)) {
      setInfo({ ...info, allergies: [...info.allergies, allergy] })
    }
  }

  const removeAllergy = (allergy: string) => {
    setInfo({ ...info, allergies: info.allergies.filter((a) => a !== allergy) })
  }

  const addCustomAllergy = () => {
    if (customAllergy.trim()) {
      addAllergy(customAllergy.trim())
      setCustomAllergy("")
    }
  }

  const generateCard = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setIsGenerating(false)
      alert("Emergency card generated! In a real app, this would create a downloadable card with Chinese translations.")
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/tools">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Tools
                </Link>
              </Button>
              <div>
                <h1 className="text-2xl font-bold flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  Emergency Card Creator
                </h1>
                <p className="text-muted-foreground">Create a bilingual emergency card for medical situations</p>
              </div>
            </div>
            <Button onClick={generateCard} disabled={!info.name || isGenerating}>
              <Download className="h-4 w-4 mr-2" />
              {isGenerating ? "Generating..." : "Generate Card"}
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={info.name}
                    onChange={(e) => setInfo({ ...info, name: e.target.value })}
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="bloodType">Blood Type (Optional)</Label>
                  <Input
                    id="bloodType"
                    value={info.bloodType}
                    onChange={(e) => setInfo({ ...info, bloodType: e.target.value })}
                    placeholder="e.g., A+, O-, AB+"
                  />
                </div>
                <div>
                  <Label htmlFor="contact">Emergency Contact</Label>
                  <Input
                    id="contact"
                    value={info.emergencyContact}
                    onChange={(e) => setInfo({ ...info, emergencyContact: e.target.value })}
                    placeholder="Phone number or contact info"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Allergies</CardTitle>
                <p className="text-sm text-muted-foreground">Select common allergies or add custom ones</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  {commonAllergies.map((allergy) => (
                    <Button
                      key={allergy.english}
                      variant={info.allergies.includes(allergy.english) ? "default" : "outline"}
                      size="sm"
                      onClick={() =>
                        info.allergies.includes(allergy.english)
                          ? removeAllergy(allergy.english)
                          : addAllergy(allergy.english)
                      }
                      className="justify-start"
                    >
                      {allergy.english}
                    </Button>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Input
                    value={customAllergy}
                    onChange={(e) => setCustomAllergy(e.target.value)}
                    placeholder="Add custom allergy"
                    onKeyPress={(e) => e.key === "Enter" && addCustomAllergy()}
                  />
                  <Button onClick={addCustomAllergy} size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>

                {info.allergies.length > 0 && (
                  <div className="space-y-2">
                    <Label>Selected Allergies:</Label>
                    <div className="flex flex-wrap gap-2">
                      {info.allergies.map((allergy) => (
                        <div
                          key={allergy}
                          className="flex items-center gap-1 bg-red-100 text-red-800 px-2 py-1 rounded-md text-sm"
                        >
                          {allergy}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeAllergy(allergy)}
                            className="h-4 w-4 p-0 hover:bg-red-200"
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Medical Conditions</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={info.conditions.join(", ")}
                  onChange={(e) => setInfo({ ...info, conditions: e.target.value.split(", ").filter(Boolean) })}
                  placeholder="List any medical conditions (diabetes, heart condition, etc.)"
                  rows={3}
                />
              </CardContent>
            </Card>
          </div>

          {/* Preview */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Emergency Card Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-red-200 rounded-lg p-4 bg-red-50 space-y-3">
                  <div className="text-center border-b border-red-200 pb-2">
                    <div className="font-bold text-red-800">EMERGENCY MEDICAL CARD</div>
                    <div className="text-sm text-red-600">紧急医疗卡</div>
                  </div>

                  {info.name && (
                    <div>
                      <div className="font-semibold">Name / 姓名:</div>
                      <div>{info.name}</div>
                    </div>
                  )}

                  {info.bloodType && (
                    <div>
                      <div className="font-semibold">Blood Type / 血型:</div>
                      <div>{info.bloodType}</div>
                    </div>
                  )}

                  {info.allergies.length > 0 && (
                    <div>
                      <div className="font-semibold text-red-700">ALLERGIES / 过敏:</div>
                      <div className="text-sm space-y-1">
                        {info.allergies.map((allergy) => {
                          const commonAllergy = commonAllergies.find((a) => a.english === allergy)
                          return (
                            <div key={allergy} className="flex justify-between">
                              <span>{allergy}</span>
                              <span className="text-red-600">{commonAllergy?.chinese || "过敏"}</span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  {info.conditions.length > 0 && (
                    <div>
                      <div className="font-semibold">Medical Conditions / 疾病:</div>
                      <div className="text-sm">{info.conditions.join(", ")}</div>
                    </div>
                  )}

                  {info.emergencyContact && (
                    <div>
                      <div className="font-semibold">Emergency Contact / 紧急联系人:</div>
                      <div className="text-sm">{info.emergencyContact}</div>
                    </div>
                  )}

                  <div className="text-xs text-red-600 border-t border-red-200 pt-2">
                    <div>我需要医疗帮助 (I need medical help)</div>
                    <div>请叫救护车 (Please call an ambulance)</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Card Features</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span>Bilingual (English & Chinese)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span>Wallet-sized format</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span>Emergency phrases included</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span>Printable on cardstock</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
