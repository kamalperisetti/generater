// Style your components here
import styled from 'styled-components'

export const Heading = styled.h1`
  color: #35469c;
`
export const UrlInput = styled.input`
  border-style: solid;
  border-color: #d7dfe9;
  color: #5a7184;
  margin: 8px;
`

export const SelectInput = styled.select`
  color: #5a7184;
  margin-left: 10px;
`

export const Option = styled.option`
  color: #1e293b;
  ${props => console.log(props.value)}
`
export const Lable = styled.label`
  margin-left: 10px;
`

export const Button = styled.button`
  background-color: #0b69ff;
  border-radius: 10px;
  padding: 10px;
  color: #ffffff;
  border-width: 0px;
  margin-top: 10px;
`
export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-around;
`
export const TextContainer = styled.form`
  display: flex;
  flex-direction: column;
`

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-image: url(${props => props.Urlll});
  background-size: cover;
  height: 300px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 50px;
`

export const Content = styled.p`
  color: #ffffff;
  font-size: ${props => props.fontSize}px;
`
