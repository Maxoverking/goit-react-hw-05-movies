import NotFound from '../../image/not found.jpeg'
const UrlError = () => {
    return (
        <div style={{margin: '10px'}}>
            <img src={`${NotFound}`} alt="Error" />
        </div>
    ) 
};
export default UrlError;
