import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export function FileManager() {
  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-black">File Manager</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <h2 className="text-lg font-semibold mb-4 text-black">Existing Files</h2>
          <div className="space-y-4">
            {existingFiles.map((file) => (
              <FileItem key={file.name} file={file} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4 text-black">Upload New Files</h2>
          <form className="space-y-4">
            {['file1', 'file2', 'file3'].map((fileId) => (
              <div key={fileId}>
                <Label htmlFor={fileId}>File {fileId.charAt(fileId.length - 1)}</Label>
                <Input id={fileId} type="file" />
              </div>
            ))}
            <Button type="submit">Upload Files</Button>
          </form>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4 text-black">File Status Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {statusSections.map((section) => (
            <StatusSection key={section.title} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
}

const existingFiles = [
  { status: 'Approved', name: 'Document.pdf', uploader: 'John Doe' },
  { status: 'Pending', name: 'Presentation.pptx', uploader: 'Jane Smith' },
  { status: 'Denied', name: 'Report.docx', uploader: 'Bob Johnson' },
];

const statusSections = [
  { title: 'Approved', files: ['Document.pdf', 'Presentation.pptx'] },
  { title: 'Pending', files: ['Report.docx'] },
  { title: 'Denied', files: ['Report.docx'] },
];

function FileItem({ file }) {
  const statusColors = {
    Approved: 'bg-blue-500',
    Pending: 'bg-yellow-500',
    Denied: 'bg-red-500',
  };

  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
      <div className="flex items-center space-x-4">
        <div className={`${statusColors[file.status]} text-white font-semibold px-3 py-1 rounded-full`}>
          {file.status}
        </div>
        <div>
          <p className="font-medium text-black">{file.name}</p>
          <p className="text-gray-500 text-sm">Uploaded by {file.uploader}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Button size="icon" variant="ghost">
          <DownloadIcon className="w-5 h-5 text-black" />
        </Button>
        <Button size="icon" variant="ghost">
          <DeleteIcon className="w-5 h-5 text-black" />
        </Button>
        <Button size="icon" variant="ghost">
          <TrashIcon className="w-5 h-5 text-black" />
        </Button>
      </div>
    </div>
  );
}

function StatusSection({ section }) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-2 text-black">{section.title}</h3>
      <div className="space-y-2">
        {section.files.map((file) => (
          <div className="flex items-center justify-between" key={file}>
            <div className="text-gray-500">{file}</div>
            <div className="flex items-center space-x-4">
              <Button size="icon" variant="ghost">
                <DeleteIcon className="w-5 h-5 text-black" />
              </Button>
              <Button size="icon" variant="ghost">
                <TrashIcon className="w-5 h-5 text-black" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DeleteIcon(props) {
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
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <line x1="18" x2="12" y1="9" y2="15" />
      <line x1="12" x2="18" y1="9" y2="15" />
    </svg>
  );
}

function DownloadIcon(props) {
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
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

function TrashIcon(props) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
