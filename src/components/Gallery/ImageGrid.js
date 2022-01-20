import useFirestore from '../../hooks/useFirestore';

export default function ImageGrid() {
    const {docs} = useFirestore('images')

    return (
        <div className="img-grid">
            {docs && docs.map(doc => (
                <div className='img-wrap' key={doc.id}>
                    <img src={doc.url} alt='uploaded pic'/>
                </div>
            ))}
        </div>
    )
}