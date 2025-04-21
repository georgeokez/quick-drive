"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  ChevronRight,
  FileText,
  Folder,
  Grid3X3,
  Home,
  List,
  Plus,
  Search,
  Settings,
  Star,
  Trash2,
  Upload,
  Users,
} from "lucide-react"

// Mock data structure
interface FileItem {
  id: string
  name: string
  type: "file" | "folder"
  size?: string
  modified: string
  url?: string
  parent: string
}

export default function GoogleDriveClone() {
  // Mock data
  const mockFiles: FileItem[] = [
    { id: "root", name: "My Drive", type: "folder", modified: "2023-04-15", parent: "" },
    { id: "folder1", name: "Documents", type: "folder", modified: "2023-04-10", parent: "root" },
    { id: "folder2", name: "Images", type: "folder", modified: "2023-04-12", parent: "root" },
    { id: "folder3", name: "Projects", type: "folder", modified: "2023-04-14", parent: "root" },
    {
      id: "file1",
      name: "Resume.pdf",
      type: "file",
      size: "2.5 MB",
      modified: "2023-04-08",
      url: "#",
      parent: "folder1",
    },
    {
      id: "file2",
      name: "Cover Letter.docx",
      type: "file",
      size: "1.2 MB",
      modified: "2023-04-09",
      url: "#",
      parent: "folder1",
    },
    {
      id: "file3",
      name: "Profile Picture.jpg",
      type: "file",
      size: "3.7 MB",
      modified: "2023-04-11",
      url: "#",
      parent: "folder2",
    },
    {
      id: "file4",
      name: "Vacation.png",
      type: "file",
      size: "5.1 MB",
      modified: "2023-04-13",
      url: "#",
      parent: "folder2",
    },
    {
      id: "file5",
      name: "Project Plan.xlsx",
      type: "file",
      size: "1.8 MB",
      modified: "2023-04-07",
      url: "#",
      parent: "folder3",
    },
    {
      id: "file6",
      name: "Presentation.pptx",
      type: "file",
      size: "4.2 MB",
      modified: "2023-04-06",
      url: "#",
      parent: "folder3",
    },
    { id: "folder4", name: "Personal", type: "folder", modified: "2023-04-05", parent: "folder1" },
    {
      id: "file7",
      name: "Notes.txt",
      type: "file",
      size: "0.1 MB",
      modified: "2023-04-04",
      url: "#",
      parent: "folder4",
    },
  ]

  const [currentFolder, setCurrentFolder] = useState("root")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [breadcrumbs, setBreadcrumbs] = useState<{ id: string; name: string }[]>([{ id: "root", name: "My Drive" }])

  // Get current folder path for display
  // const getCurrentPath = () => {
  //   return breadcrumbs.map((item) => item.name).join(" > ")
  // }

  // Filter files based on current folder
  const getCurrentFolderContents = () => {
    return mockFiles.filter((item) => item.parent === currentFolder)
  }

  // Handle folder click
  const handleFolderClick = (folder: FileItem) => {
    setCurrentFolder(folder.id)
    setBreadcrumbs([...breadcrumbs, { id: folder.id, name: folder.name }])
  }

  // Handle breadcrumb navigation
  const navigateToBreadcrumb = (index: number) => {
    const newBreadcrumbs = breadcrumbs.slice(0, index + 1)
    setBreadcrumbs(newBreadcrumbs)
    setCurrentFolder(newBreadcrumbs[newBreadcrumbs.length - 1].id)
  }

  // Handle file upload (mock)
  const handleUpload = () => {
    alert("Upload functionality would open a file picker here")
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 border-r p-4 flex flex-col h-full">
        <div className="flex items-center gap-2 mb-6">
          <img src='./images/quick_drive_icon_pic.png' alt='logo' width="60" height="60" />
          <span className="text-xl font-semibold">Quick Drive</span>
        </div>

        <Button variant="outline" className="flex items-center justify-start gap-2 mb-6 w-full" onClick={handleUpload}>
          <Plus className="h-4 w-4" />
          <span>New</span>
        </Button>

        <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Home className="h-4 w-4" />
            <span>My Drive</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Users className="h-4 w-4" />
            <span>Shared with me</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Star className="h-4 w-4" />
            <span>Starred</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Trash2 className="h-4 w-4" />
            <span>Trash</span>
          </Button>
        </div>

        <div className="mt-auto">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Header */}
        <header className="border-b p-4">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search in Drive" className="pl-10 w-full max-w-md" />
            </div>
            <Button variant="ghost" size="icon" onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}>
              {viewMode === "grid" ? <List className="h-5 w-5" /> : <Grid3X3 className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </header>

        {/* Breadcrumbs */}
        <div className="p-4 border-b">
          <div className="flex items-center gap-2 text-sm">
            {breadcrumbs.map((crumb, index) => (
              <div key={crumb.id} className="flex items-center">
                {index > 0 && <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />}
                <button onClick={() => navigateToBreadcrumb(index)} className="hover:underline">
                  {crumb.name}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* File/Folder list */}
        <div className="flex-1 p-4 overflow-auto">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {getCurrentFolderContents().map((item) => (
                <div
                  key={item.id}
                  className="border rounded-lg p-4 hover:bg-muted/50 cursor-pointer flex flex-col items-center"
                  onClick={() => (item.type === "folder" ? handleFolderClick(item) : window.open(item.url, "_blank"))}
                >
                  {item.type === "folder" ? (
                    <Folder className="h-12 w-12 text-blue-500 mb-2" />
                  ) : (
                    <FileText className="h-12 w-12 text-gray-500 mb-2" />
                  )}
                  <div className="text-center">
                    <div className="font-medium truncate max-w-[120px]">{item.name}</div>
                    <div className="text-xs text-muted-foreground">{item.modified}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-3 font-medium">Name</th>
                    <th className="text-left p-3 font-medium">Modified</th>
                    <th className="text-left p-3 font-medium">Size</th>
                  </tr>
                </thead>
                <tbody>
                  {getCurrentFolderContents().map((item) => (
                    <tr
                      key={item.id}
                      className="border-t hover:bg-muted/50 cursor-pointer"
                      onClick={() =>
                        item.type === "folder" ? handleFolderClick(item) : window.open(item.url, "_blank")
                      }
                    >
                      <td className="p-3 flex items-center gap-2">
                        {item.type === "folder" ? (
                          <Folder className="h-5 w-5 text-blue-500" />
                        ) : (
                          <FileText className="h-5 w-5 text-gray-500" />
                        )}
                        {item.name}
                      </td>
                      <td className="p-3 text-muted-foreground">{item.modified}</td>
                      <td className="p-3 text-muted-foreground">{item.size || "--"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Upload button (fixed position) */}
        <div className="fixed bottom-6 right-6">
          <Button onClick={handleUpload} className="rounded-full h-14 w-14 shadow-lg">
            <Upload className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  )
}
