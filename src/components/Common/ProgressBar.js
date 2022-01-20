import { useEffect } from "react";
import { motion } from "framer-motion";
import useStorage from "../../hooks/useStorage";

export default function ProgressBar({
    file,
    setFile
}) {

    const {url, progress} = useStorage(file)

    useEffect(() => {
        if (url) {
            setFile(null)
        }
    }, [url, setFile])

    return (
        <motion.div className="progressBar"
            initial={{ width: 0 }}
            animate={{ width: progress + '%' }}
        ></motion.div>
    )
}