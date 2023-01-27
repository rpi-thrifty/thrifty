import * as React from 'react'
import { Box, Button, Typography, TextField, MenuItem, FormControl, InputLabel, OutlinedInput, unstable_useId } from "@mui/material"
import InputAdornment from '@mui/material/InputAdornment';
import Collapse from '@mui/material/Collapse';
import { useState } from 'react'
import "./upload_button.css"
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import CloseFullscreenOutlinedIcon from '@mui/icons-material/CloseFullscreenOutlined';


export const Upload_button = () => {

    const [upload, setUpload] = useState(false);

    const [category, setCategory] = useState(0);

    const changeCategory = (e) => {
        setCategory(e.target.value);
    };

    const categories = [
        {
            value: 0,
            label: "Electronics"
        },
        {
            value: 1,
            label: "Clothing"
        },
        {
            value: 2,
            label: "Furniture"
        },
        {
            value: 3,
            label: "Miscellaneous"
        }
    ]

    const text = (t) => {
        return(
            <Typography sx={{textTransform: "capitalize", marginBottom: "1vh", fontWeight: 'bold'}}>{t}</Typography>
        )
    }

    const Category_dropdown = () => {
        return (
        <Box sx={{margin: "2vh"}}>
            {text("please select your category:")}
            {/* drop down menu */}
            <TextField
                select
                label="Select"
                onChange={changeCategory}
                value={category}
                helperText="Please select your category">
                    {/* loop to access values*/}
                    {categories.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
            </TextField>
        </Box>
        )
    }

    const Title = () => {
        return (
        <Box sx={{margin: "2vh"}}>
            {text("please enter a title for your post:")}
            <FormControl fullWidth>
                <InputLabel>Title</InputLabel>
                <OutlinedInput label="title" id='input_title'/>
            </FormControl>
            
        </Box>
        )
    }

    const Price = () => {
        return (
        <Box sx={{margin: "2vh"}}>
            {text("price you are looking for:")}
            <FormControl fullWidth>
                <InputLabel>Price</InputLabel>
                <OutlinedInput label="Price" 
                    startAdornment=
                        {<InputAdornment position="start">$</InputAdornment>} 
                    type="number"
                    id='input_price'
                    defaultValue={-1}
                />
            </FormControl>
            
        </Box>
        )
    }

    const Description = () => {
        return (
        <Box sx={{margin: "2vh"}}>
            {text("describe your product:")}
            <TextField
                label="Description"
                id='input_description'
                multiline
                fullWidth
                minRows={4}
            />
        </Box>
        )
    }

    const Submit = () => {
        return (
            <Box sx={{display: "flex", justifyContent: "center"}}>
                <Button>
                    <Box className="but_inside">
                        <a className="but_inside_text" >submit</a>
                    </Box>
                </Button>
            </Box>
        )
    }

    const text_box = () => {
        return (
        <Box className="submit_box">
            <Category_dropdown/>
            <Title/>
            <Price/>
            <Description/>
            <Submit/>

            <Box sx={{margin:"2vh"}}>

            </Box>
        </Box>
        )
    }

    const button = (button_text) => {
        return (
        <Button onClick={() => setUpload(!upload)}>            
            <Collapse orientation="horizontal" in={upload} collapsedSize={40}>
                <Box className="but">
                    <a className="butText">{button_text} </a>
                    {upload
                        ? <CloseFullscreenOutlinedIcon className='butText'/>
                        : <SellOutlinedIcon className='butText'/>
                    }
                </Box>
            </Collapse>
        </Button>
        )
    }

    const obscure_background = () => {
        return (
            <div className='black_bg' onClick={() => setUpload(!upload)}/>
        )
    }
    

    return (
    <Box>
        {
            upload ?
            <>
            {obscure_background()}
            {button('collapse')}
            {text_box()}
            </>
            :
            <>
            {button("Sell")}
            </>
            
        }
    </Box>
    )
}