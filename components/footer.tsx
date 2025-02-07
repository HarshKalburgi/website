import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 border-t">
      <div className="container">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <Link href="https://www.instagram.com/vayavyalabs/" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://www.facebook.com/VayavyaLabs" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://x.com/vayavya" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://www.linkedin.com/company/vayavya-labs-pvt--ltd/" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://www.youtube.com/@vayavyalabs" className="text-muted-foreground hover:text-primary">
              <Youtube className="h-6 w-6" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 Vayavya Labs Pvt. Ltd. All rights reserved.</p>
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

