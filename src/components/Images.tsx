import React, { useState } from "react"
import Image from "react-bootstrap/Image"
import { Nav } from "react-bootstrap"

interface IImage {
  albumId: number
  id: number
  thumbnailUrl: string
  title: string
  url: string
}

type ImagesToProps = {
  category1: IImage[]
  category2: IImage[]
  category3: IImage[]
  category4: IImage[]
}

const Images: React.FC<ImagesToProps> = ({
  category1,
  category2,
  category3,
  category4,
}) => {
  const categoriesNames = ["category1", "category2", "category3", "category4"]
  const categoriesValues = [category1, category2, category3, category4]
  const [currentCategory, setCurrentCategory] = useState(0)

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
          <Image src={item.url} key={item.id} thumbnail className="image" />
        ))}
      </div>
    </div>
  )
}

export default Images
