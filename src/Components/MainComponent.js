import React, { useState, useEffect } from 'react'
import { Grid, Box, } from "@mui/material"
import { useSearchParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import Button from '@mui/material/Button';
import axios from "axios"
import NewsComponent from './NewsComponent';
function MainComponent() {
    const [inputData, setInputData] = useState("");
    const [fetchedData, setFetchedData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const searched = searchParams.get('q');
        if (searched) {
            setInputData(searched);
            fetchApi(searched)
        } else {
            setFetchedData([])
            setInputData("")
        }
    }, [searchParams])

    const fetchApi = (searchedData) => {
        setIsLoading(true);
        let Api_Key = "093de8f4a8b348b4aa28c568c9a23cb9"
        axios.get(`https://newsapi.org/v2/everything?q=${searchedData}&sortBy=publishedAtpublishedAt&pageSize=100&page=1`, {
            headers: {
                'X-Api-Key': Api_Key
            }
        })
            .then(res => {
                setIsLoading(false);
                setFetchedData(res.data.articles)
            })
            .catch(err => {
                console.log(err);
            })
    }
    const submitForm = (e) => {
        e.preventDefault();
        setSearchParams(`?q=${inputData}`)
    }

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center">
            <Box mt={2}>
                <form onSubmit={submitForm}>
                    <Box display="flex" alignItems="center">
                        <Box>
                            <input type="text"
                                value={inputData}
                                placeholder='search'
                                onChange={(e) => {
                                    setInputData(e.target.value);
                                }}
                                style={{
                                    height: "30px",
                                    width: "100%",
                                    border: "1px solid gray",
                                    borderRadius: "10px",
                                    padding: "10px"
                                }} />
                        </Box>
                        <Box>
                            <Button disabled={inputData ? false : true} style={{ marginLeft: "50%" }} type="submit" variant="contained">Search</Button>
                        </Box>
                    </Box>
                </form>
            </Box>
            <Grid container justifyContent="center" mt={2}>
                {isLoading ? <CircularProgress /> :
                    <NewsComponent fetchedData={fetchedData} />
                }
            </Grid>
        </Grid>
    )
}

export default MainComponent