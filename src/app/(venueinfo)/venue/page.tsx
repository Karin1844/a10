import CardPanel from "@/components/CardPanel"
import VenueCatalog from "@/components/VenueCatalog"
import getVenues  from "@/libs/getVenues"
import { Suspense } from 'react'
import { LinearProgress } from "@mui/material"

export default function venue(){
    const venues = getVenues()
    return(
        <main>
            <div className="mx-2 my-2 px-2 py-2">
                <Suspense fallback={<p>Loading... <LinearProgress/></p>}>
                  <VenueCatalog venuesJson={venues}/>
                </Suspense>
            </div>
        </main>
    )
}