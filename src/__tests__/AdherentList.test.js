import React from "react"
import { render } from "@testing-library/react"
import AdherentList from "./../components/Adherent/AdherentList"
import mockAdherent from "../mock/mockAdherent"
import user from "@testing-library/user-event"

describe("test adherents list", () => {
  test("should render an array of tasks list", () => {
    const mockDeleteAdherent = jest.fn()
    const AdherentsComponent = render(
      <AdherentList adherents={mockAdherent}
      deleteAdherent={mockDeleteAdherent}  />
    )
    expect(AdherentsComponent).toMatchSnapshot()
    // debug()
  })

  test("test the integration of AdherentList and Adherent", () => {
    const mockDeleteAdherent = jest.fn()
    const mockAdherentsWithOneAdherent = [
      {
        id:"1",
        name:"mersani",
        pname:"rawen",
        mail:"rawen@mail.com",
        tel:12345678,
        etat: "non",
        mdp: "rawen",
        
      },
    ]
    const { getByTestId } = render(
      <AdherentList deleteAdherent={mockDeleteAdherent} adherents={mockAdherentsWithOneAdherent} />
    )
    const DeleteAdherentButton = getByTestId("deleteAdherent")
    user.click(DeleteAdherentButton)
    expect(mockDeleteAdherent).toHaveBeenCalled()
    expect(mockDeleteAdherent).toHaveBeenCalledTimes(1)
  })
})