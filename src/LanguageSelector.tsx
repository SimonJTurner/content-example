import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useContext } from "react";
import { ContentContext, LanguagesEnum } from "./ContentContext";

export const LanguageSelector = () => {
    const { selectedLanguage, setLanguage } = useContext(ContentContext);
    const handleChange = (event: SelectChangeEvent) => {
        setLanguage(event.target.value as LanguagesEnum);
    }

    return (
        <FormControl fullWidth>
            <InputLabel id="LanguageLabel">Language</InputLabel>
            <Select
                labelId="LanguageSelectLabel"
                id="LanguageSelect"
                value={selectedLanguage}
                label="Language"
                onChange={handleChange}
            >
                {
                    Object.keys(LanguagesEnum).map(lang => {
                        return (<MenuItem key={LanguagesEnum[lang]} value={LanguagesEnum[lang]}> {LanguagesEnum[lang]}</MenuItem>)
                    })
                }
            </Select>
        </FormControl>
    );

};