import React from "react"
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
  const categories = ["category1", "category2", "category3", "category4"]

  return (
    <div className="contentWrapper">
      <Nav defaultActiveKey="/home" className="flex-column">
        {categories.map((item, index) => (
          <Nav.Link>{item}</Nav.Link>
        ))}
      </Nav>
      <div>
        {category1.map((item) => (
          <Image src={item.url} key={item.id} thumbnail className="image" />
        ))}
      </div>
    </div>
  )
}

export default Images
