import {reactive, watch} from "vue";
import data from "../../data.json";
import {$Merge} from "@/helpers/merge";
import {$addFilter} from "@/helpers/addfilter";
export const $store = reactive({
    searchingArr: [],
    mainArr: data,
});
watch($store.searchingArr, ($new) => {
    $store.mainArr = data;
    if ($new.length === 0) {
        $store.mainArr = data;
    } else {
        $store.mainArr.map(($obj) => {
            $obj.allSkills = $Merge(
                $obj.role,
                $obj.level,
                $obj.languages,
                $obj.tools
            );
        });
        $store.mainArr = $store.mainArr.filter(($obj) => {
            let $status = $store.searchingArr.every((el) => {
                return $obj.allSkills.includes(el);
            });
            if ($status) {
                return $obj;
            }
        });
    }
});
