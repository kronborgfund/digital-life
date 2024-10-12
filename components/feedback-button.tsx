import React from 'react'
import { useState } from 'react'
import { Mail, Info } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const feedbackOptions = [
  { id: 'bug', label: 'Report a bug', subject: 'Bug Report', body: 'I found a bug in the application:' },
  { id: 'feature', label: 'Suggest a feature', subject: 'Feature Suggestion', body: 'I have a feature suggestion:' },
  { id: 'question', label: 'Ask a question', subject: 'Question about the app', body: 'I have a question about the application:' },
]
export default function FeedbackButton() {
  const [selectedFeedback, setSelectedFeedback] = useState(feedbackOptions[0])


  const generateMailtoUrl = () => {
    const recipient = 'feedback@lenesit.com'
    const subject = encodeURIComponent(selectedFeedback.subject)
    const body = encodeURIComponent(`${selectedFeedback.body}\n\nContext: ${window.location.href}\n\n`)
    return `mailto:${recipient}?subject=${subject}&body=${body}`
  }
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Feedback</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Send Feedback</DialogTitle>
                <DialogDescription>
                  Choose a feedback option below. This will open your default email client.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                {feedbackOptions.map((option) => (
                  <Button
                    key={option.id}
                    variant={selectedFeedback.id === option.id ? "default" : "outline"}
                    onClick={() => setSelectedFeedback(option)}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <Info className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  We use email for feedback to ensure your privacy and to avoid storing any personal data on our servers.
                </p>
              </div>
              <Button asChild>
                <a href={generateMailtoUrl()}>Send Feedback</a>
              </Button>
            </DialogContent>
          </Dialog>
        </TooltipTrigger>
        <TooltipContent>
          <p>Send Feedback</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>

  )
}
