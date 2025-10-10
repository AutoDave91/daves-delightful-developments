export default function Footer() {
    return (
        <footer className="bg-slate-800 text-amber-50 py-8 mt-16">
            <div className="max-w-6xl mx-auto text-center px-6 flex flex-col items-center gap-4">
                {/* Contact Prompt */}
                <p className="text-lg font-semibold">
                    Have a project in mind? Contact Us at{" "}
                    <a
                        href="mailto:david@davesdelightful.dev"
                        className="text-ddd-teal hover:text-ddd-orange underline transition"
                    >
                        david@davesdelightful.dev
                    </a>
                </p>

                {/* Footer Info */}
                <p className="text-sm text-amber-50/80">
                    © {new Date().getFullYear()} Dave's Delightful Developments. All rights reserved.
                </p>
                <p className="text-ddd-teal-600/80">
                    Built with love, integrity, and family values.
                </p>
            </div>
        </footer>
    );
}