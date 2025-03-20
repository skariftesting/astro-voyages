import * as React from "react"

import { cn } from "@/lib/utils"

// TextareaProps extends React.TextareaHTMLAttributes for better type documentation and future extensibility
// This empty interface is intentional as it allows for future props to be added while maintaining type safety
/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
/* eslint-enable @typescript-eslint/no-empty-object-type */

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
