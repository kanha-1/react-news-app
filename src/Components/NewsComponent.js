import React, { Suspense } from 'react'
import { Grid, Box, Card, Paper, Button } from "@mui/material"
import { CircularProgress } from '@mui/material';
import moment from 'moment';
function NewsComponent(props) {
    return (
        <Grid>
            <Grid item>
                {props.fetchedData.map((data, index) => {
                    console.log((data.length < 1 ? "No Data" : data));
                    return (
                        <Paper key={index} style={{ width: "70%", margin: "auto", marginTop: "10px" }}>
                            <Card style={{ padding: "10px" }}>
                                <Grid container>
                                    <Grid item xs={4}>
                                        <Suspense fallback={<CircularProgress />}>
                                            <img src={data.urlToImage} height="100%" width="100%" alt={data.title} />
                                        </Suspense>
                                    </Grid>
                                    <Grid item xs={6} ml={2}>
                                        <Box fontSize="22px" fontWeight="bold">{data.title}</Box>
                                        <Box fontSize="13px" mt={1}> <div dangerouslySetInnerHTML={{ __html: data.description }}></div></Box>
                                        <Box fontSize="12px" mt={1}> <div dangerouslySetInnerHTML={{ __html: data.content }}></div></Box>
                                        {data.author ?
                                            <Box mt={1} color="blue">Author - {data.author}</Box>
                                            : null}
                                        <Box>Updated At - {moment(data.publishedAt).format('LLL')}</Box>
                                        <Button variant="contained" style={{ marginTop: "10px" }} onClick={() => window.open(data.url)}>
                                            Read More
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Paper>
                    )
                })}
            </Grid>
        </Grid>
    )
}

export default NewsComponent