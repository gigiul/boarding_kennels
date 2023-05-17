
const Wrapper = (Component, id) =>
    function HOC() {

        return (
            <div className='sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0'>
                <span className='hash-span ' id={id} >
                    &nbsp;
                </span>
                <Component />
            </div>
        )
    }


export default Wrapper