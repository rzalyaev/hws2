import React from 'react'
import {Slider, SliderProps} from '@mui/material'
import {lime} from "@mui/material/colors";

const SuperRange: React.FC<SliderProps> = (props) => {
    const green = lime[500]
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 147,
                color: green
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
