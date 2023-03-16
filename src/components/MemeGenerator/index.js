import {Component} from 'react'
import {
  Heading,
  UrlInput,
  SelectInput,
  Option,
  Button,
  Container,
  TextContainer,
  ImgContainer,
  Content,
  Lable,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

// Write your code here

class MemeGenerator extends Component {
  state = {
    toptext: '',
    bottomtext: '',
    url: '',
    activeId: fontSizesOptionsList[0].optionId,
    imgUrl: '',
    topText: '',
    bottomText: '',
    id: '',
  }

  ToptextChange = event => {
    this.setState({toptext: event.target.value})
  }

  ButtonChange = event => {
    this.setState({bottomtext: event.target.value})
  }

  UrlInput = event => {
    this.setState({url: event.target.value})
  }

  onChangeId = event => {
    this.setState({activeId: event.target.value})
  }

  onClickGenerate = event => {
    event.preventDefault()
    const {toptext, bottomtext, url, activeId} = this.state
    this.setState({
      topText: toptext,
      bottomText: bottomtext,
      imgUrl: url,
      id: activeId,
    })
  }

  render() {
    const {
      toptext,
      bottomtext,
      url,
      imgUrl,
      topText,
      bottomText,
      id,
      activeId,
    } = this.state
    console.log(activeId)
    return (
      <Container>
        <TextContainer onSubmit={this.onClickGenerate}>
          <Heading>Meme Generator</Heading>
          <Lable htmlFor="img">Image URL</Lable>
          <UrlInput
            id="img"
            value={url}
            onChange={this.UrlInput}
            placeholder="Enter the mage url"
          />
          <Lable htmlFor="top">Top Text</Lable>
          <UrlInput
            id="top"
            value={toptext}
            onChange={this.ToptextChange}
            placeholder="Enter the top text"
          />
          <Lable htmlFor="bot">Bottom Text</Lable>
          <UrlInput
            id="bot"
            value={bottomtext}
            onChange={this.ButtonChange}
            placeholder="Enter the bottom text"
          />
          <Lable htmlFor="font">Font Size</Lable>
          <SelectInput id="font" value={activeId} onChange={this.onChangeId}>
            {fontSizesOptionsList.map(each => (
              <Option key={each.optionId} value={each.optionId}>
                {each.displayText}
              </Option>
            ))}
          </SelectInput>
          <Button onClick="submit">Generate</Button>
        </TextContainer>
        <ImgContainer data-testid="meme" Urlll={imgUrl}>
          <Content fontSize={id}>{topText}</Content>
          <Content fontSize={id}>{bottomText}</Content>
        </ImgContainer>
      </Container>
    )
  }
}

export default MemeGenerator
