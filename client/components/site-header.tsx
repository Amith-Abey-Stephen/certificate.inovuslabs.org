"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const openPage = (url: string) => {
    window.open(url, "_blank")
    setIsOpen(false)
  }
  const handleButtonClick = (url: string) => {
    if (url === "website") {
      openPage("https://inovuslabs.org")
    } else if (url === "blog") {
      openPage("https://blog.inovuslabs.org?utm_source=certificate_validator")
    } else if (url === "podcast") {
      openPage("https://inovuslabs.org/inora")
    } else if (url === "github") {
      openPage("https://github.com/inovus-labs")
    }
  }

  return (
    <header className="flex items-center justify-between py-6">
      <div className="flex items-center gap-2">
        <Image src="/inovus-logo.png" priority={true} alt="Inovus Labs" width={180} height={48} priority className="h-12 w-auto" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden items-center gap-4 md:flex">
        <Button variant="ghost" className="text-teal-300 hover:text-teal-100 hover:bg-teal-900/50" onClick={() => handleButtonClick("blog")}>
          Blog
        </Button>
        <Button variant="ghost" className="text-teal-300 hover:text-teal-100 hover:bg-teal-900/50" onClick={() => handleButtonClick("podcast")}>
          Podcast
        </Button>
        <Button variant="ghost" className="text-teal-300 hover:text-teal-100 hover:bg-teal-900/50" onClick={() => handleButtonClick("github")}>
          Project
        </Button>
        <Button variant="ghost" className="bg-teal-600 text-white hover:bg-teal-700" onClick={() => handleButtonClick("website")}>
          Official Website
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>

          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-teal-300 hover:text-teal-100 hover:bg-teal-900/50">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          
          <SheetContent className="bg-slate-900 border-slate-800">
            <SheetHeader>
              <SheetTitle className="text-white">
                <div className="flex items-center gap-2 mb-6">
                  <Image src="/inovus-logo.png" priority={true} alt="Inovus Labs" width={150} height={40} className="h-10 w-auto" />
                </div>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-8">
              <SheetClose asChild>
                <Button
                  variant="ghost"
                  className="justify-start text-teal-300 hover:text-teal-100 hover:bg-teal-900/50"
                  onClick={() => handleButtonClick("blog")}
                >
                  Blog
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button
                  variant="ghost"
                  className="justify-start text-teal-300 hover:text-teal-100 hover:bg-teal-900/50"
                  onClick={() => handleButtonClick("podcast")}
                >
                  Podcast
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button
                  variant="ghost"
                  className="justify-start text-teal-300 hover:text-teal-100 hover:bg-teal-900/50"
                  onClick={() => handleButtonClick("github")}
                >
                  Project
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button
                  className="justify-start bg-teal-600 text-white hover:bg-teal-700"
                  onClick={() => handleButtonClick("website")}
                >
                  Official Website
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
