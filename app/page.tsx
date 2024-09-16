/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jUGtvk7xYea
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { JSX, SVGProps } from "react"
import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[260px_1fr]">
      <div className="hidden flex-col gap-2 bg-background text-foreground md:flex md:flex-col">
        <div className="sticky top-0 p-2">
          <Button
            variant="ghost"
            className="w-full justify-start gap-2 px-2 text-left"
          >
            <div className="flex size-7 items-center justify-center rounded-full">
              <BotIcon className="size-4" />
            </div>
            <div className="grow truncate text-sm">IT Guy </div>
            <PenIcon className="size-4" />
          </Button>
        </div>
        <div className="flex-1 overflow-auto">
          <div className="grid gap-1 p-2 text-foreground">
            <div className="px-2 text-xs font-medium text-muted-foreground">
              Recent Conversations
            </div>
            <Link
              href="#"
              className="block flex-1 overflow-hidden truncate whitespace-nowrap rounded-md p-2 text-sm transition-colors hover:bg-muted/50"
              prefetch={false}
            >
              Image Upload Test
            </Link>
            <Link
              href="#"
              className="block flex-1 overflow-hidden truncate whitespace-nowrap rounded-md p-2 text-sm transition-colors hover:bg-muted/50"
              prefetch={false}
            >
              Video Playback
            </Link>
            <Link
              href="#"
              className="block flex-1 overflow-hidden truncate whitespace-nowrap rounded-md p-2 text-sm transition-colors hover:bg-muted/50"
              prefetch={false}
            >
              PDF Viewer
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="sticky top-0 p-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="h-10 gap-1 rounded-xl px-3 text-lg data-[state=open]:bg-muted"
              >
                IT Guy Playground{" "}
                <span className="text-muted-foreground">v1.0</span>
                <ChevronDownIcon className="size-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="max-w-[300px]">
              <DropdownMenuItem className="items-start gap-2">
                <SparkleIcon className="mr-2 size-4 shrink-0 translate-y-1" />
                <div>
                  <div className="font-medium">IT Guy Pro</div>
                  <div className="text-muted-foreground/80">
                    Advanced features, image/video support, and more.
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="items-start gap-2">
                <ZapIcon className="mr-2 size-4 shrink-0 translate-y-1" />
                <div>
                  <div className="font-medium">IT Guy Basic</div>
                  <div className="text-muted-foreground/80">
                    Simple text-based chatbot for quick tasks.
                  </div>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="mx-auto flex max-w-2xl flex-1 flex-col items-start gap-8 px-4">
          <div className="mt-4 flex items-start gap-4">
            <Avatar className="size-6 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>YO</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <div className="font-bold">You</div>
              <div className="prose text-muted-foreground">
                <p>
                  Hi there! I would like to try out the new IT Guy Playground.
                  Can I upload some images, videos, and PDFs to test the
                  features?
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Avatar className="size-6 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>EU</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <div className="font-bold">IT Guy</div>
              <div className="prose text-muted-foreground">
                <p>
                  Absolutely! The IT Guy Playground is designed to handle a
                  variety of media types. Feel free to upload any images,
                  videos, or PDFs you&apos;d like to test. I&apos;ll be happy to
                  assist you with those tasks.
                </p>
                <p>
                  To get started, you can use the buttons below to upload your
                  files. Once they&apos;re uploaded, I&apos;ll be able to
                  process and respond to them.
                </p>
              </div>
              <div className="flex items-center gap-2 py-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-4 text-stone-400 hover:bg-transparent hover:text-stone-900"
                >
                  <UploadIcon className="size-4" />
                  <span className="sr-only">Upload</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-4 text-stone-400 hover:bg-transparent hover:text-stone-900"
                >
                  <VideoIcon className="size-4" />
                  <span className="sr-only">Video</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-4 text-stone-400 hover:bg-transparent hover:text-stone-900"
                >
                  <FileIcon className="size-4" />
                  <span className="sr-only">PDF</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-4 text-stone-400 hover:bg-transparent hover:text-stone-900"
                >
                  <SendIcon className="size-4" />
                  <span className="sr-only">Send</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-4 text-stone-400 hover:bg-transparent hover:text-stone-900"
                >
                  <CircleStopIcon className="size-4" />
                  <span className="sr-only">Stop</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky bottom-0 mx-auto flex w-full max-w-2xl flex-col gap-1.5 bg-background px-4 py-2">
          <div className="relative">
            <Textarea
              placeholder="Type your message..."
              name="message"
              rows={1}
              className="min-h-[48px] resize-none rounded-2xl border border-neutral-400 p-4 pr-16 shadow-sm"
              defaultValue={""}
            >
              <div className="absolute right-3 top-3 flex size-8 items-center gap-2">
                <Button size="icon">
                  <PaperclipIcon className="mr-2 size-4" />
                  Attach
                </Button>
                <Button size="icon">
                  <UploadIcon className="mr-2 size-4" />
                  Upload
                </Button>
                <Button size="icon">
                  <SendIcon className="mr-2 size-4" />
                  Send
                </Button>
              </div>
            </Textarea>
            <Button
              type="submit"
              size="icon"
              className="absolute right-3 top-3 size-8"
            >
              <SendIcon className="size-4" />
              <span className="sr-only">Upload</span>
            </Button>
          </div>
          <p className="text-center text-xs font-medium text-neutral-700">
            The Chatbot Playground is a beta feature. Use at your own risk.
          </p>
        </div>
      </div>
    </div>
  )
}

function BotIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  )
}

function ChevronDownIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function CircleStopIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <rect width="6" height="6" x="9" y="9" />
    </svg>
  )
}

function FileIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  )
}

function PaperclipIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  )
}

function PenIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    </svg>
  )
}

function SendIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}

function SparkleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  )
}

function UploadIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}

function VideoIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  )
}

function ZapIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  )
}
