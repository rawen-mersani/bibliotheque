    
import React from "react"
import { render, fireEvent } from "@testing-library/react"
import AddForm from "../components/Livre/AddForm"
import user from '@testing-library/user-event'



    test("should display an error", () => {
       const mockAddLivre = jest.fn()
       const { debug, getByLabelText, getByTestId } = render(
         <AddForm addLivre={mockAddLivre} />
       )
      
       const inputNbExmp = getByLabelText(/nbExmp/i)
       const NbExmpValue = "100"
  
       user.type(inputNbExmp, NbExmpValue)
  
  
       expect(getByTestId("error-nbExmp")).toBeTruthy()
       //debug(container)
     
     })
  
      test("should not display an error", () => {
        const mockAddLivre = jest.fn()
        const { debug, getByLabelText,  queryByTestId} = render(<AddForm addLivre={mockAddLivre} />)
  
        const inputNbExmp = getByLabelText(/nbExmp/i)
       const NbExmpValue = "10"
  
        // user.type(inputDuration, durationValue)
        fireEvent.change(inputNbExmp, { target: { value: NbExmpValue } })
        expect(queryByTestId("error-NbExemp")).toBeNull()
  
  
       
       
      })