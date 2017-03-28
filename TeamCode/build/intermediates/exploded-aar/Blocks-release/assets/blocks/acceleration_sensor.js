/**
 * @fileoverview FTC robot blocks related to acceleration sensor.
 * @author lizlooney@google.com (Liz Looney)
 */

// The following are generated dynamically in HardwareUtil.fetchJavaScriptForHardware():
// createAccelerationSensorDropdown
// The following are defined in vars.js:
// getPropertyColor

Blockly.Blocks['accelerationSensor_getProperty'] = {
  init: function() {
    var PROPERTY_CHOICES = [
        ['XAccel', 'XAccel'],
        ['YAccel', 'YAccel'],
        ['ZAccel', 'ZAccel'],
    ];
    this.setOutput(true); // no type, for compatibility
    this.appendDummyInput()
        .appendField(createAccelerationSensorDropdown(), 'IDENTIFIER')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown(PROPERTY_CHOICES), 'PROP');
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    var TOOLTIPS = [
        ['XAccel', 'Returns the X Acceleration, in G\'s.'],
        ['YAccel', 'Returns the Y Acceleration, in G\'s.'],
        ['ZAccel', 'Returns the Z Acceleration, in G\'s.'],
    ];
    this.setTooltip(function() {
      var key = thisBlock.getFieldValue('PROP');
      for (var i = 0; i < TOOLTIPS.length; i++) {
        if (TOOLTIPS[i][0] == key) {
          return TOOLTIPS[i][1];
        }
      }
      return '';
    });
    this.setColour(getPropertyColor);
  }
};

Blockly.JavaScript['accelerationSensor_getProperty'] = function(block) {
  var identifier = block.getFieldValue('IDENTIFIER');
  var property = block.getFieldValue('PROP');
  var code = identifier + '.get' + property + '()';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.Blocks['accelerationSensor_getProperty_Number'] = {
  init: function() {
    var PROPERTY_CHOICES = [
        ['XAccel', 'XAccel'],
        ['YAccel', 'YAccel'],
        ['ZAccel', 'ZAccel'],
    ];
    this.setOutput(true, 'Number');
    this.appendDummyInput()
        .appendField(createAccelerationSensorDropdown(), 'IDENTIFIER')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown(PROPERTY_CHOICES), 'PROP');
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    var TOOLTIPS = [
        ['XAccel', 'Returns the X Acceleration, in G\'s.'],
        ['YAccel', 'Returns the Y Acceleration, in G\'s.'],
        ['ZAccel', 'Returns the Z Acceleration, in G\'s.'],
    ];
    this.setTooltip(function() {
      var key = thisBlock.getFieldValue('PROP');
      for (var i = 0; i < TOOLTIPS.length; i++) {
        if (TOOLTIPS[i][0] == key) {
          return TOOLTIPS[i][1];
        }
      }
      return '';
    });
    this.setColour(getPropertyColor);
  }
};

Blockly.JavaScript['accelerationSensor_getProperty_Number'] =
    Blockly.JavaScript['accelerationSensor_getProperty'];
