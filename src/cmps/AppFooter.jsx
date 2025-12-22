
export function AppFooter() {

    return (
        <footer className="app-footer full">
            <div className="footer-content">
                <div className="footer-left">
                    <span>© 2025 PlatypusBNB</span>
                    <span>·</span>
                    <a href="#">Privacy</a>
                    <span>·</span>
                    <a href="#">Terms</a>
                    <span>·</span>
                    <a href="#">Your Privacy Choices</a>
                </div>


                <div className="footer-right">
                    {import.meta.env.VITE_LOCAL ? (
                        <span className="local-services">Local</span>
                    ) : (
                        <span className="remote-services">Remote</span>
                    )}
                    <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">X</a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">F</a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">I</a>
                </div>
            </div>

        </footer>
    )
}