import React from "react"
import { render, fireEvent, act } from "@testing-library/react"
import AddForm from "../components/Adherent/AddForm"



describe("test add adherent", () => { 
  

    test("should works without crashing", () => {
      const mockAddAdherent = jest.fn()
      const { debug } = render(<AddForm addAdherent={mockAddAdherent} />)
      // debug()
    })
  
  
    test("should contains all inputs", () => {
      const mockAddAdherent = jest.fn()
      const { debug, getByLabelText, getByTestId } = render(
        <AddForm addAdherent={mockAddAdherent} />
      )
      
      const inputNom = getByLabelText(/Name/i)
       expect(inputNom).toBeTruthy()
       expect(inputNom).toHaveAttribute("type", "text")
  
      const inputPnom = getByLabelText(/Prenom/i)
      expect(inputPnom).toBeTruthy()
      expect(inputPnom).toHaveAttribute("type", "text")

      
      const inputMail = getByLabelText(/Mail/i)
      expect(inputMail).toBeTruthy()
      expect(inputMail).toHaveAttribute("type", "mail")

      
      const inputTel = getByLabelText(/Tel/i)
      expect(inputTel).toBeTruthy()
      expect(inputTel).toHaveAttribute("type", "number")
      
      expect(getByTestId("submit")).toBeTruthy()
  
     })
  
    test("should fire events", async () => {
      const promise=Promise.resolve()
      const mockAddAdherent = jest.fn(()=>promise)
      const {  getByLabelText, getByTestId } = render(
        <AddForm addAdherent={mockAddAdherent} />
      )
      const inputNom = getByLabelText(/Name/i)
  
      const nomValue="Bouguerra"    
  
      fireEvent.change(inputNom, { target: { value: nomValue } })
      
     
      //jest-dom matcher
      expect(inputNom).toHaveValue(nomValue)
      
      const inputPrenom = getByLabelText(/Prenom/i)
      const prenomValue = "Abderrahmen"

      fireEvent.change(inputPrenom, { target: { value: prenomValue } })
      expect(inputPrenom).toHaveValue(prenomValue)

      const inputMail = getByLabelText(/Mail/i)
      const mailValue = "Abderrahmen@mail.com"

      fireEvent.change(inputMail, { target: { value: mailValue } })
      expect(inputMail).toHaveValue(mailValue)

      const inputTel = getByLabelText(/Tel/i)
      const telValue = "27777231"

      // fireEvent.change(inputTel, { target: { value: telValue } })
      // expect(inputTel).toHaveValue(telValue)
      
  
     
     
      
      
      const submitButton = getByTestId("submit")
      fireEvent.click(submitButton)
      await act(()=>promise)

      
      expect(mockAddAdherent).toHaveBeenCalled()
      expect(mockAddAdherent).toHaveBeenCalledTimes(1) 
      
        
  
    })
  

  })