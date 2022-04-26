import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Image from "react-bootstrap/Image"
import { Nav, Toast } from "react-bootstrap"
import { ImagesToProps } from "../types/types"

const Images: React.FC<ImagesToProps> = ({
  category1,
  category2,
  category3,
  category4,
}) => {
  const categoriesNames = ["category1", "category2", "category3", "category4"]
  const categoriesValues = [category1, category2, category3, category4]
  const [currentCategory, setCurrentCategory] = useState(0)
  const navigate = useNavigate()

  const toImageInfoHandler = (id: number): void => {
    navigate(`/info/${id}`)
  }

  const onCatClickHandler = (index: number): void => {
    setCurrentCategory(index)
  }

  return (
    <div className="contentWrapper">
      <Nav defaultActiveKey="/home" className="flex-column navCatWrapper">
        {categoriesNames.map((item, index) => (
          <Nav.Link
            key={`${item}_${index}`}
            onClick={() => onCatClickHandler(index)}
          >
            {item}
          </Nav.Link>
        ))}
      </Nav>
      <div>
        {categoriesValues[currentCategory].map((item) => (
          <div className="imageWrapper" key={item.id}>
            <Image src={item.url} className="image" thumbnail />
            <Toast
              className="imageHint"
              onClick={() => toImageInfoHandler(item.id)}
            >
              <Toast.Body>Подробнее</Toast.Body>
            </Toast>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Images
