import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageImage: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <img id="profile-picture" src="/images/profile-picture-modified.png" className={"page-image"}></img>
  )
}

PageImage.css = `
.page-image {
  width:50%;
}
`

export default (() => PageImage) satisfies QuartzComponentConstructor
