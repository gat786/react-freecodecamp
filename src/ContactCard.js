// Copyright 2020 gat78
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from "react";

export default function ContactCard(props){
    console.log(props.imgUrl);
    return (
        <div className="card" style={{
            "width":"18rem",
        }}>
            <img src={props.imgUrl} width="100%" className="card-image-top"/>
            <div className="card-body">
                <h5 className="card-title">{props.heading}</h5>
                <p className="card-text">{props.body}</p>
                <a className="btn btn-primary" href="#">Go Somewhere</a>
            </div>
        </div>
    );
}