import React from 'react'
import NavSubGenre from "./NavSubGenre";

function NavGenres (props)
    {let genreObj={
    navSubGenres: [],
    }

function genGenreArr (filterTxt, flags, searchType) 
    {let regxStr = new RegExp(filterTxt, flags);
    if (searchType)
        {return props.genreLst.filter(genre => regxStr.test(genre['display_name']));}
    else
        {return props.genreLst.filter(genre => !regxStr.test(genre['display_name']));}    
    }

    function genGenreSubObj (title, array)
        { let obj = {};
        obj['title'] = title;
        obj['array'] = array;
        return obj;
        }

    function genGenreMainObj( title, array)
        {genreObj.navSubGenres.push(genGenreSubObj(title, array));}

    let genreFicAndNonArr = genGenreArr('.fiction', 'i', true);
    genGenreMainObj('Fiction and Non-Fiction', genreFicAndNonArr);
    let genreYngAdult = genGenreArr('adult', 'i', true);
    genGenreMainObj('Young Adult', genreYngAdult);
    let genreKids = genGenreArr('children', 'i', true);
    genGenreMainObj('Children\'s Books', genreKids);
    let genreMisc = genGenreArr('.fiction|children|adult', 'i', false);
    genGenreMainObj('Misc.', genreMisc);

    return (
        <div className='genre-category-container'>
           <NavSubGenre
           onSubGenreClick={(subGenre) => props.onSubGenreClick(subGenre)}
           genreLst={genreObj.navSubGenres} />
        </div>
    )
}

const MemoNavGenres = React.memo(NavGenres, (prevProps, nextProps) => 
    {if (prevProps.genreLst === nextProps.genreLst)
        {return true;}
    return false;
    });

export default MemoNavGenres
