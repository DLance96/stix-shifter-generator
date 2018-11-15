import logging

from ...patterns.parser import generate_query
from ..base.base_query_translator import BaseQueryTranslator
from . import <%= siemLabel %>_data_mapping
from . import <%= siemQueryLanguageLabel %>_query_constructor

logger = logging.getLogger(__name__)

DEFAULT_LIMIT = 10000
DEFAULT_TIMERANGE = 5


class StixTo<%= siemQueryLanguage %>(BaseQueryTranslator):

    def transform_query(self, data, options, mapping=None):
        """
        Transforms STIX query into <%= siemQueryLanguage %> query format. Based on a mapping file
        :param data: STIX query string to transform into <%= siemQueryLanguage %> query format
        :type data: str
        :param mapping: The mapping file path to use as instructions on how to transform the given STIX query into <%= siemQueryLanguage %> format. This defaults to the from_stix_map.json in the stix_shifter/src/modules/q<%= siemLabel %>/json/ directory
        :type mapping: str (filepath)
        :return: <%= siemQueryLanguage %> query string
        :rtype: str
        """

        logger.info("Converting STIX2 Pattern to <%= siemQueryLanguage %>")

        query_object = generate_query(data)
        data_model_mapper = <%= siemLabel %>_data_mapping.<%= siemName %>DataMapper(options)
        result_limit = options['result_limit'] if 'result_limit' in options else DEFAULT_LIMIT
        timerange = options['timerange'] if 'timerange' in options else DEFAULT_TIMERANGE
        query_string = <%= siemQueryLanguageLabel %>_query_constructor.translate_pattern(
            query_object, data_model_mapper, result_limit, timerange)
        return query_string
