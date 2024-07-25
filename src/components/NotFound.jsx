
export const NotFound = () => {

    return (

        <>
            <section className="container hero-footer-bg px-6 pb-6">
                <div className="is-flex is-flex-direction-column is-justify-content-center is-align-content-center is-align-items-center">
                    <h2 className="is-size-1">Página no encontrada</h2>
                    <p className="is-size-3">Error 404</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-face-id-error"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
                        <path d="M4 16v2a2 2 0 0 0 2 2h2" />
                        <path d="M16 4h2a2 2 0 0 1 2 2v2" />
                        <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
                        <path d="M9 10h.01" />
                        <path d="M15 10h.01" />
                        <path d="M9.5 15.05a3.5 3.5 0 0 1 5 0" />
                    </svg>

                </div>

            </section>
        </>


    )
}