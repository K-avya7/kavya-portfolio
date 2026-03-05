export default function ResumePage() {
  return (
    <div className="min-h-screen pt-32 px-8 md:px-20 bg-white text-slate-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4 text-slate-900">
          Resume
        </h1>

        <p className="text-slate-600 mb-8">
          You can preview or download my resume below.
        </p>

        <div className="flex gap-4 mb-8">
          <a
            href="/Kavya_Agrawal.pdf"
            download
            className="px-6 py-2 border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition"
          >
            Download PDF
          </a>
        </div>

        <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="/Kavya_Agrawal.pdf"
            className="w-full h-[85vh]"
          />
        </div>
      </div>
    </div>
  );
}