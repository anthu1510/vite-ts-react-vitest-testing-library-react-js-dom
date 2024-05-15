import { render, screen, fireEvent } from "@testing-library/react"

import App from "../src/App"
describe('App', () => {
    it('Should render default App Components', () => {
        render(<App/>)
        const logo = screen.getByRole('roleLogoImage');
        expect(logo).toBeInTheDocument()
        expect(logo).toHaveAttribute("src", "/vite.svg")
        expect(logo).toHaveAttribute("alt", "Vite logo")

        const ReactLogo = screen.getByRole('reactLogoImage');
        expect(ReactLogo).toBeInTheDocument()
        expect(ReactLogo).toHaveAttribute("src", "/src/assets/react.svg")
        expect(ReactLogo).toHaveAttribute("alt", "React logo")

        const heading = screen.getByRole('heading', {level: 1});
        expect(heading).toBeInTheDocument()
        expect(heading).toHaveTextContent(/Vite/i)

        const countButton = screen.getByRole('button');
        expect(countButton).toBeInTheDocument()
        expect(countButton).toHaveTextContent(/count is 0/i)

        const editParagraph = screen.getAllByRole('paragraph');
        expect(editParagraph[0]).toBeInTheDocument()
        expect(editParagraph[0]).toHaveTextContent(/and save to test HMR/i)

        expect(editParagraph[1]).toBeInTheDocument()
        expect(editParagraph[1]).toHaveTextContent(/Click on the Vite and React logos to learn more/i)
    })

    it('Should render button clicked count incremented 0 to 1', () => {
        render(<App/>)
        const logo = screen.getByRole('roleLogoImage');
        expect(logo).toBeInTheDocument()
        expect(logo).toHaveAttribute("src", "/vite.svg")
        expect(logo).toHaveAttribute("alt", "Vite logo")

        const ReactLogo = screen.getByRole('reactLogoImage');
        expect(ReactLogo).toBeInTheDocument()
        expect(ReactLogo).toHaveAttribute("src", "/src/assets/react.svg")
        expect(ReactLogo).toHaveAttribute("alt", "React logo")

        const heading = screen.getByRole('heading', {level: 1});
        expect(heading).toBeInTheDocument()
        expect(heading).toHaveTextContent(/Vite/i)

        const countButton = screen.getByRole('button');
        expect(countButton).toBeInTheDocument()
        fireEvent.click(countButton)
        expect(countButton).toHaveTextContent(/count is 1/i)

        const editParagraph = screen.getAllByRole('paragraph');
        expect(editParagraph[0]).toBeInTheDocument()
        expect(editParagraph[0]).toHaveTextContent(/and save to test HMR/i)

        expect(editParagraph[1]).toBeInTheDocument()
        expect(editParagraph[1]).toHaveTextContent(/Click on the Vite and React logos to learn more/i)
    })
})