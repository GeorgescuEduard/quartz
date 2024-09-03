import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageImage: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <img src="https://www.adobe.com/products/firefly/features/media_1cc035824a5dbf414f18a55ef622e86cc51684dd5.png?width=750&format=png&optimize=medium"></img>
  )
}

PageImage.css = `
.page-image {
  margin: 0;
}
`

export default (() => PageImage) satisfies QuartzComponentConstructor
